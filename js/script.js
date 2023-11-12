// document.body.onload = addElements;

// function addElements(){
//   // Creating Elements
//   const myContainer = document.createElement('div'),
//         myForm = document.createElement('form'),
//         myH1 = document.createElement('h1'),

//         // Full Name Elements
//         myDivFullName = document.createElement('div'),
//         myFNLabel = document.createElement('label'),
//         myFNInput = document.createElement('input'),

//         // Email Elements
//         myDivEmail = document.createElement('div'),
//         myMailLabel = document.createElement('label'),
//         myMailInput = document.createElement('input'),

//         // Email To Elements
//         myDivEmailTo = document.createElement('div'),
//         myMailLabelTo = document.createElement('label'),
//         myMailInputTo = document.createElement('input'),

//         // Message Elements
//         myDivMSG = document.createElement('div'),
//         myMSGLabel = document.createElement('label'),
//         myMSGInput = document.createElement('textarea'),

//         // Button Elements
//         myButton = document.createElement('button');
        
//   // Creating Element Texts
//   const myH1Text = document.createTextNode('send emails using php'),
//         myFNLabelText = document.createTextNode('full name:'),
//         myMailLabelText = document.createTextNode('email:'),
//         myMailToLabelText = document.createTextNode('to:'),
//         myMSGLabelText = document.createTextNode('message:');

//         myButton.textContent = 'send';
  
//   // Adding Classes
//   myContainer.classList.add('container');
//   myH1.classList.add('d-flex', 'justify-content-center', 'algin-items-center', 'text-up', 'color-White');
//       myFNLabel.classList.add('text-up', 'color-White', 'font-bold');
//     myMailLabel.classList.add('text-up', 'color-White', 'font-bold');
//   myMailLabelTo.classList.add('text-up', 'color-White', 'font-bold');
//      myMSGLabel.classList.add('text-up', 'color-White', 'font-bold');
//        myButton.classList.add('text-up', 'color-White', 'font-bold');

//   myDivFullName.classList.add('input-div');
//   myDivEmail.classList.add('input-div');
//   myDivEmailTo.classList.add('input-div');
//   myDivMSG.classList.add('input-div');

//   // Setting Attributes
//   myForm.setAttribute('method', 'post');
//   myForm.setAttribute('action', 'form.php');

//   myFNInput.setAttribute('type', 'text');
//   myFNInput.setAttribute('required', 'required');
//   myFNInput.setAttribute('name', 'FullName');
//   myFNInput.setAttribute('id', 'Fname');
//   myFNInput.setAttribute('placeholder', 'Type you name here');

//   myMailInput.setAttribute('type', 'email');
//   myMailInput.setAttribute('required', 'required');
//   myMailInput.setAttribute('name', 'Email');
//   myMailInput.setAttribute('id', 'Email');
//   myMailInput.setAttribute('placeholder', 'Type you email here');

//   myMailInputTo.setAttribute('type', 'email');
//   myMailInputTo.setAttribute('required', 'required');
//   myMailInputTo.setAttribute('name', 'Rmail');
//   myMailInputTo.setAttribute('id', 'Rmail');
//   myMailInputTo.setAttribute('placeholder', 'Type the reciver email here');

//   myMSGInput.setAttribute('required', 'required');
//   myMSGInput.setAttribute('name', 'msg');
//   myMSGInput.setAttribute('id', 'msg');
//   myMSGInput.setAttribute('placeholder', 'Type your message here');
  
//   myButton.setAttribute('name', 'submit');

//   // Displaying Elements
//   myContainer.appendChild(myH1);
//   myContainer.appendChild(myForm);

//   myForm.appendChild(myDivFullName);
//   myDivFullName.appendChild(myFNLabel);
//   myDivFullName.appendChild(myFNInput);
//   myFNLabel.appendChild(myFNLabelText);

//   myForm.appendChild(myDivEmail);
//   myDivEmail.appendChild(myMailLabel);
//   myDivEmail.appendChild(myMailInput);
//   myMailLabel.appendChild(myMailLabelText);

//   myForm.appendChild(myDivEmailTo);
//   myDivEmailTo.appendChild(myMailLabelTo);
//   myDivEmailTo.appendChild(myMailInputTo);
//   myMailLabelTo.appendChild(myMailToLabelText);

//   myForm.appendChild(myDivMSG);
//   myDivMSG.appendChild(myMSGLabel);
//   myDivMSG.appendChild(myMSGInput);
//   myMSGLabel.appendChild(myMSGLabelText);

//   myForm.appendChild(myButton);

//   myH1.appendChild(myH1Text);
//   document.body.appendChild(myContainer);
// }