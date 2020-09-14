const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const User = require('../../models/User');
const Profile = require('../../models/Profile');
const Post = require('../../models/Post');

router.get('/me', auth, async (req, res) => {
	try {
		const profile = await Profile.findOne({ user: req.user.id }).populate('user', [ 'name', 'avatar' ]);
		if (!profile) {
			return res.status(400).json();
		}
		res.json(profile);
	} catch (error) {
		console.error(error.message);
		res.status(500).send('server error');
	}
});

//  create or update the profile
//  private
router.post('/', auth, async (req, res) => {
	const { location, favmarsalbum, favmarssong } = req.body;
	const profileFields = {};
	profileFields.user = req.user.id;
	if (location) profileFields.location = location;
	if (favmarsalbum) profileFields.favmarsalbum = favmarsalbum;
	if (favmarssong) profileFields.favmarssong = favmarssong;
	try {
		let profile = await Profile.findOneAndUpdate(
			{ user: req.user.id },
			{ $set: profileFields },
			{ new: true, upsert: true }
		);
		res.json(profile);
	} catch (error) {
		console.error(error.message);
		res.status(500).send('server error');
	}
});

//  note: get all profiles
//  access: public
router.get('/', async (req, res) => {
	try {
		const profiles = await Profile.find().populate('user', [ 'name', 'avatar' ]);
		res.json(profiles);
	} catch (error) {
		console.error(error.message);
		res.status(500).send('server error');
	}
});

//  get profile by id
//  access: public
router.get('/user/:user_id', async (req, res) => {
	try {
		const profile = await Profile.findOne({ user: req.params.user_id }).populate('user', [ 'name', 'avatar' ]);
		if (!profile) {
			return res.status(400).json({ msg: 'Profile not found.' });
		}
		res.json(profile);
	} catch (error) {
		console.error(error.message);
		if (error.kind == 'ObjectId') {
			return res.status(400).json({ msg: 'Profile not found' });
		}
		res.status(500).send('server error');
	}
});

//  delete the profile
//  access: private
router.delete('/me', auth, async (req, res) => {
	try {
		await Post.deleteMany({ user: req.user.id });
		//remove profile and user
		await Profile.findOneAndRemove({ user: req.user.id });
		await User.findOneAndRemove({ _id: req.user.id });
		res.json({ msg: 'User deleted.' });
	} catch (error) {
		console.error(error.message);
		res.status(500).send('server error');
	}
});

module.exports = router;