## Vocab
- **Query** - a request to our database. A database query can retrieve resources from the database, but it can also be used to create new resources, update existing resources, or even delete existing resources from the database.
- **try/catch** - a code structure that will attempt to run the code in the `try` block. However, if anything in the `try` block results in an error being thrown, it will be "caught" in the `catch` block. Essentially, we can ensure that if an error is thrown, instead of shutting the server down, we handle the error properly.

## Queries

### Create A New Document (Two Options)
There are two ways we can create a new document in a collection. The first approach is to use the model's built-in `.create()` method. The second approach is to use the model as a constructor, and save the new document into the database using the `.save()` method.

With both approaches, it is crucial that we are passing an object that follows the schema's pattern.
#### Create Method
The `.create()` method will both create the new document and save it to the database in one function call:
```js
const newDocument = await SomeModel.create({ fieldOne: "value1", fieldTwo: "value2" });
```
> NOTE: All of the methods covered are asynchronous.

#### Constructor and Save
Alternatively, we can use the model as a constructor, then take the resulting document object and call the `.save()` method from it:

```js
// Step 1: Create a new document via the model
const newDocument = new SomeModel({ fieldOne: "value1", fieldTwo: "value2" });
// Step 2: Save the newly created document
await newDocument.save();
```
> The benefit to this approach comes from the ability to connect multiple documents together via nested references and schema, which we won't be covering quite yet.

### Finding Documents
Just like with creating documents, there are multiple ways to find a specific document.
#### Find One Document By Id
Every document has a `._id` property, which is globally unique. Therefore, if you need to query for a single document, this is arguably the most reliable approach. We can find a single document by its id by using the model's `.findById()` method:

```js
const singleDocument = await SomeModel.findById(insertIdHere);
```

In this example, `singleDocument` will be a single document in `SomeModel`'s collection that has an `_id` of `insertIdHere`.

#### Find One Document By Any Other Property
Sometimes, however, you may need to find a single document but you don't have the `_id` available. In these cases, you can use the `.findOne()` method to find a single document that matches the provided parameters:

```js
const singleDocument = await SomeModel.findOne({ someProperty: "someValue" });
```
> NOTE: If multiple documents match the query parameters, only the first one found will be returned.

In this example, `singleDocument` will be a single document in `SomeModel`'s collection that has `someProperty` equal to `"someValue"`.

#### Find All
To find all documents, simply use the model's `.find()` method and pass in an empty parameter object:

```js
const allDocuments = await SomeModel.find({});
```

In this example, `allDocuments` will be all documents in `SomeModel`'s collection.

#### Find Multiple That Match Property
If you only want all documents that match a specific property, the parameter object should not be empty:

```js
const matchingDocuments = await SomeModel.find({ someProperty: "someValue" });
```

In this example, `matchingDocuments` will be all documents in `SomeModel`'s collection in which the document has `someProperty` with a value of `"someValue"`.

### Update Document
Like creating and finding documents, we have multiple options when it comes to updating a single (or multiple, potentially) documents. The main difference with the update is that we'll need three arguments regardless of which method we use:
1. The query parameter. This will vary based on which of the two methods are used.
2. The update body. This is an object containing the properties we wish to change, with the values we wish to change those properties to.
3. An options object. We spent time and effort defining the validations in the schema, and for whatever reason, Mongoose does not run those validations on update by default. Additionally, Mongoose will not, by default, return the updated document, but rather the document as it existed before the update.
   
#### With Specific Id
To target the document to be updated by its `_id`, you'll use the `.findByIdAndUpdate()` method. The first argument will just be the `_id` itself:

```js
const updatedDocument = await SomeModel
  .findByIdAndUpdate(
    someId, 
    { somePropertyToUpdate: "newValue" }, 
    { new: true, runValidators: true }
  )
```

In this example, `updatedDocument` will be a document in `SomeModel`'s collection. The document will be whichever document had an `_id` of `someId`, and the new value for `somePropertyToUpdate` will be `"newValue"`. Because the third argument with `new: true` and `runValidators: true` is provided, the update will be reflected in the returned document, and any validations set in the schema will be enforced.


#### With Matching Property
Sometimes you don't know the `_id` of the document you need to update. In these cases, we use the model's `.findOneAndUpdate()` method. The only difference here is that rather than passing in a raw value as the first argument, it will need to be a parameter object:

```js
const updatedDocument = await SomeModel
  .findOneAndUpdate(
    { someProperty: "someValue" },
    { somePropertyToUpdate: "newValue", someOtherPropertyToUpdate: "someOtherNewValue" },
    { new: true, runValidators: true }
  )
```

### Delete Document
Deleting a document is pretty straightforward, and follows the same general rules as our options for finding a single document.

#### With Specific Id
To delete a single document from a collection with a provided `_id`, we use the model's `.findByIdAndDelete()` method.

```js
const deletedDocument = await SomeModel.findByIdAndDelete(someId);
```

In this example, the document in `SomeModel`'s collection that has an `_id` of `someId` will be deleted.

#### With Matching Property
Alternatively, if we don't have the `_id`, we can use the model's `.findOneAndDelete()` method, and provide a parameter object instead:

```js
const deletedDocument = await SomeModel.findOneAndDelete({ someProperty: "someValue" });
```

In this example, the first document with `someProperty` equal to `"someValue"` will be deleted from `SomeModel`'s collection.

## Advanced Bits
#### Adding to an array with an Update
#### Find Paginated Documents
#### Document References