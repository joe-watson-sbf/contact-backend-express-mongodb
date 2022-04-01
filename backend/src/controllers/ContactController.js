import mongoose from "mongoose";
import {ContactSchema} from '../models/ContactModel';


const Contact = mongoose.model('Contact', ContactSchema);

export const addNewContact = (req, res) =>{
    let newContact = new Contact(req.body);

    newContact.save((err, contact)=>{
        err ? res.send(err) : res.json(contact);
    })

}

export const getContacts = (req, res)=>{

    Contact.find({}, (err, contact)=> {
        err ? res.send(err) : res.json(contact);
    })
}


export const getContactById = (req, res)=>{

    Contact.findById(req.params.contactId, (err, contact)=> {
        err ? res.send(err) : res.json(contact);
    })
}


export const updateContact = (req, res) =>{

    Contact.findOneAndUpdate({_id: req.params.contactId},
        req.body,
        {new: true},
        (err, contact) => {
        err ? res.send(err) : res.json(contact);
    })
}


export const deleteContact = (req, res) =>{

    Contact.findByIdAndDelete(req.params.contactId, (err) => {
        err ? res.send(err) : res.json({response: 'Contact deleted!'});
    })
}