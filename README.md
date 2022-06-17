# Backend

## Project setup

```
npm install
```

### Run project

```
node index.js
```

### API

```
name: Product getAll
description: get all products
method: post
endpoint: https://shippop-node.herokuapp.com/product/get-all

name: Product getById
description: get product by id
method: post
endpoint: https://shippop-node.herokuapp.com/product/get-by
request-body: {
    "_id": String
}

name: Product getByName
description: get product by name
method: post
endpoint: https://shippop-node.herokuapp.com/product/get-by-name
request-body: {
    "name": String
}

name: Product getByStatus
description: get product by status
method: post
endpoint: https://shippop-node.herokuapp.com/product/get-by-status
request-body: {
    "status": Integer (0: hide, 1: visible)
}

name: Product create
description: create product
method: post
endpoint: https://shippop-node.herokuapp.com/product/create
request-body: {
    "user_id": String,
    "name": String,
    "description": String,
    "price": Integer,
    "discount": Integer,
    "status": Integer (0: hide, 1: visible),
    "author": String,
    "barcode": String,
    "category": String,
    "publisher": String,
    "type": String
}

name: Product edit
description: edit product
method: post
endpoint: https://shippop-node.herokuapp.com/product/edit
request-body: {
    "_id": String,
    "name": String,
    "description": String,
    "discount": Integer,
    "user_id": String
}

name: Product editScore
description: edit product score
method: post
endpoint: https://shippop-node.herokuapp.com/product/edit-score
request-body: {
    "_id": String,
    "score": Integer (1-5),
    "user_id": String
}

name: Product editStatus
description: edit product status
method: post
endpoint: https://shippop-node.herokuapp.com/product/edit-status
request-body: {
    "_id": String,
    "status": Integer (0: hide, 1: visible),
    "user_id": String
}

name: Product delete
description: delete product
method: post
endpoint: https://shippop-node.herokuapp.com/product/delete
request-body: {
    "_id": String,
    "user_id": String
}

name: User getAll
description: get all users
method: post
endpoint: https://shippop-node.herokuapp.com/user/get-all

name: User create
description: create user
method: post
endpoint: https://shippop-node.herokuapp.com/user/create
request-body: {
    "email": String,
    "password": String,
    "username": String,
    "name": String
}

name: User delete
description: delete user
method: post
endpoint: https://shippop-node.herokuapp.com/user/create
request-body: {
    "_id": String
}
```
