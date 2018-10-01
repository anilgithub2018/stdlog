
const express = require('express');

const router = express.Router();
const userController = require('../controllers/UserController');

/**
 * @api {post} /user/tenant/add Add new Tenant
 * @apiName TenantRegistration
 * @apiGroup User
 *
 * @apiParam (Query){String} idtoken Token Id generated from google api.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
    "_id": "5b11009d26f58e133cd8a964",
    "username": "Sagar Tandel",
    "email": "sagar@hashbinary.com",
    "role": "TENANT"
}
 */
router.post('/tenant/add', userController.addTenant);

/**
 * @api {post} /user/landlord/add Add new Landlord
 * @apiName LandlordRegistration
 * @apiGroup User
 *
 * @apiParam (Query){String} idtoken Token Id generated from google api.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *   "_id": "5b11009d26f58e133cd8a964",
 *   "username": "Sagar Tandel",
 *   "email": "sagar@hashbinary.com",
 *   "role": "LANDLORD"
 *}
 */
router.post('/landlord/add', userController.addLandlord);

router.get('/Users', userController.getEntityList );

module.exports = router;