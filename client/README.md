# Product API

Client-side of product API.

`/src` folder structure is as follows:

```sh
./src/
├── App.css
├── App.jsx
├── assets
│   └── react.svg
├── components
│   ├── api
│   │   ├── APIBody.component.jsx
│   │   ├── Body.component.jsx
│   │   ├── Head.component.jsx
│   │   └── Table.component.jsx
│   ├── create
│   │   ├── Create.component.jsx
│   │   └── StatusComp.component.jsx
│   ├── edit
│   │   └── EditForm.component.jsx
│   ├── home
│   │   └── Home.component.jsx
│   └── navbar
│       └── NavBar.component.jsx
├── index.css
└── main.jsx
```

There are some things must be changed, for example, `<Create />` and `<EditForm />` components are highly identical. I need to create a new component which handles the joint functionality they cover.
