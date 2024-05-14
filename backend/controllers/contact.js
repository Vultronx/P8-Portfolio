const Contact = require('../models/contact');

const fs = require('fs');

exports.createContact = (req, res, next) => {
    const contactObject = JSON.parse(req.body.contact);
    delete contactObject._id;
    console.log(req.body);
    const contact = new Contact({
        ...contactObject,
        userId: req.auth.userId,
    });
  
    contact.save()
    .then(() => { res.status(201).json({message: 'Objet enregistré !'})})
    .catch(error => { res.status(400).json( { error })})
};

exports.getOneContact = (req, res, next) => {
//A voir si nécessaire dans le futur
};

exports.replyContact = (req, res, next) => {
//A définir dans le futur
 };

 exports.deleteContact = (req, res, next) => {
//A développer dans le futur
 };

exports.getAllContact = (req, res, next) => {
  Contact.find().then(
    (contacts) => {
      res.status(200).json(contacts);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};