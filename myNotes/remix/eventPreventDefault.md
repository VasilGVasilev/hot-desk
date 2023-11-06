On Cancel section of 30 min tutorial I learned that making button of type button explicitly, prevents the form from being sent as per usual via POST:

    Why is there no event.preventDefault() on the button?

A <button type="button">, while seemingly redundant, is the HTML way of preventing a button from submitting its form.