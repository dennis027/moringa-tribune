// $(document).ready(function(){
//     $('form').submit(function(event){
//       event.preventDefault()
//     }) // End of submit event
  
//   }) // End of document ready function













  $(document).ready(function(){
      $('form').submit(function(event){
          event.preventDefault()
          form=$("form")

          $.ajax({
              'url':'/ajax/newsletter/',
              'type': 'POST',
              'data': 'form.serialize()',
              'dataType': 'json',
              'success': function(data){
                  alert(data['success'])
              },
          })//end ajax
          $('#id_your_name').val('')
          $('#id_email').val('');

      })// End of submit event
  })// End of ready function