import { addNewContact, 
    getContacts, 
    getContactById, 
    updateContact, 
    deleteContact} from "../controllers/crmControllers";

const routes = (app) => {

    app.route('/contact')
    .get((req, res, next)=>{
        // middleware
        console.log(`Request of: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
    }, getContacts)
    .post(addNewContact);  // Add a neww contact 

    app.route('/contact/:contactId')
    // find by ID
    .get(getContactById)

    // UPDATE CONTACT
    .put(updateContact)

    // DELETE CONTACT
    .delete(deleteContact)
}

export default routes;