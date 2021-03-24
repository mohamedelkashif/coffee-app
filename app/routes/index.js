import express from 'express';

const router = express.Router();

// ======= Heartbeat route ==========
/**
 * @author Mohamed Kashif
 * @description API endpoint to check the health of the service
 */
router.get('/heartbeat', (req, res) => {
    var status = {
        success: true,
        statusCode: res.statusCode
    }
    if (res.statusCode != 200) return res.json(503, "Service is unavialable");
    res.send(status);
});
// ======= End of heartbeat =========


/* GET home page. */
router.get('/', (req, res, next) => res.send({
    title: 'Coffee app saying hello'
}));

export default router;