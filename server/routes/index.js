import express from 'express';
import adminRoutes from './admin';
import authRoutes from './auth';
import configRoutes from './config';
import paymentRoutes from './payment';
import syncDataRoute from './sync-data';
import tripRoutes from './trip';
import userRoutes from './user';
import verifyRoutes from './verify';

const router = express.Router();

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK'));

router.get('/', (req, res) =>
  res.send('OK'));
// mount user routes at /verify
router.use('/verify', verifyRoutes);

// mount user routes at /users
router.use('/users', userRoutes);

// mount user routes at /users
router.use('/config', configRoutes);

// mount auth routes at /auth
router.use('/auth', authRoutes);

// mount trip routes at /trips
router.use('/trips', tripRoutes);

// mount sync data route at /sync-data
router.use('/syncData', syncDataRoute);

// mount admin routes at /admin
router.use('/admin', adminRoutes);

// mount payment routes at /payment
router.use('/payment', paymentRoutes);

export default router;
