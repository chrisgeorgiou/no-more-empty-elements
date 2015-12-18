# no-more-empty-elements
Remove the empty html branch elements recursively. That means remove until the parent has contents.

# Stop blaming yourself - is not your fault
Have ever found yourself, cursing around about some html elements that some editors create without any logic??! I haven't, but a colleague of mine has multiple times. This plugin is dedicated to him and his name is Steve. 

# Cut to the chase
A plugin that removes recursively the html empty elements (and their parents if they are empty).
- You get to decide what is empty
- You get to decide if you need to keep some elements (not classes but elements)
- You can also handle what text is considered empty WOW! much WOW

# API
Simple enough just use the default or extend it
$('YourElement').noMoreEmptyElements({
  excludeElements: ["IMG"], // Exclude elements even though they are empty // IMG the default
  sameAsEmpty: ["&nbsp;"], // What to be considered as empty text inside an element // nbsp the default
  isEmpty: function (element){} // Write your own function of what is empty.
});

By default isEmpty there is an empty $('YourSelectorOrClassOrWhatever').html() element. Also spaces, I don't like them I trim the string.
Finally, isEmpty takes under consideration the first two arrays.

