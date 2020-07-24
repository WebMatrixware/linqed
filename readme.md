# linqed

linqed (pronounced linked), is a no frills linq library for Javascript. It boasts the following.

Check out the [API](https://github.com/WebMatrixware/linqed/blob/master/api.md) for details on methods and usage.

* No prototype pollution
* Simple transformation of any array into a linqed collection without impacting the rest of your arrays
* All add-on methods are non-enumerable to help keep them from getting in your way
* Easy to use chainable fluent syntax
* Does not re-create functionality that already exists on native Javascript Arrays

# Philosophy

linqed attempts to be very light-weight and simply streamline some common data driven use cases in a world where more and more of your data comes as JSON collections over the wire that a front end now needs to do something with. Whether that is allowing client side filters and sorting, or creating a wholesale data layer in the client the point is not to build a database, but to simply add functionality to arrays that you commonly need.

The other cornerstone of linqeds philosophy is that as a library that I decided to pull out of the several projects it started in for my own purposes and share, it is those pieces that are most common and useful in a broad sense. I tend to believe that if you have the general tools to deal with the things that come up the most often it allows you to focus on the pieces that make your software unique or that are driven by your business domain’s specific details. This means that libraries should not attempt to solve every problem known to man, but rather should focus on a single common piece and provide a flexible enough interface to allow them to be reused in broad group of scenarios.

With that in mind please note that some things are left out intentionally because they either do not make sense within that philosophy and with that stated goal, or arrays already provide them. The classic example is a `count()` method, while nearly every other linq implementation for nearly every language has one, arrays already have a length property that a `count()` method would most likely just wrap and pass back.

With that being said, I am always happy to be convinced of a new use case or some better way of handling a common problem that can or should be added.

# Installation

```
npm install -s linqed
```

# Basic Usage

```javascript
const Linqed = require('linqed');

// This attaches the linqed interface to your new empty array
let collection = Linqed([]);
```

# Syntax

Linqed has two types of methods, those that work on a linqed collection and return that collection altered in some way (chainable methods) and those that work on a linqed collection and return some other value as a result (final methods).

For example, the `.distinct()` method returns a linqed collection with all duplicate members removed from it, while the `.min()` function returns the smallest value of the collection.
