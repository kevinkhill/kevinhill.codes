---
title: StrokesPlus.net Macro Loader
layout: layouts/base.njk
subtitle: A fun little abstraction to use the macro categories as script storage.
---

This drops right into your `Load` automation

```javascript
// Make an array from the macros
const Macros = Array.from(StrokesPlus.Configuration.Settings.SavedMacros);

// Helper function for getting macros by category
Macros.byCategory = category => Macros.Where(macro => macro.Category === category);

// Helper function for eval-ing arrays of macros
Macros.evalAll = macroArr => macroArr.forEach(macro => eval(macro.Script));
```

Then call a macro category such as...

```javascript
Macros.evalAll(Macros.byCategory("functions"));
```

to eval all the macros into the current engine.
