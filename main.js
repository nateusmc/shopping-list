'use strict';

$(function() {
  $('#js-shopping-list-form').submit(event => {
    event.preventDefault();
    //Obtain user inputs
    const userTextElement = $(event.currentTarget).find('input[name="shopping-list-entry"]').val();
    //convert into jquery object
    const element = $(`
<li>
  <span class="shopping-item">${userTextElement}</span>
  <div class="shopping-item-controls">
    <button class="shopping-item-toggle">
      <span class="button-label">check</span>
    </button>
    <button class="shopping-item-delete">
      <span class="button-label">delete</span>
    </button>
  </div>
</li>)
`);
    //add to HTML content
    $(event.currentTarget).find('.js-shopping-list-entry').val('');
    $('.shopping-list').append(element);
  });
  //delete

  $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
    $(this).closest('li').remove();  
  });

  $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  });
});