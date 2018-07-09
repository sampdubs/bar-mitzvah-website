function ensureValid() {
    $('#submit').click(function(event) {
        const firstName = $('#first-name').val();
        const lastName = $('#last-name').val();
        const email = $('#email').val();
        const yesOrNo = $('input[name="yes_no"]:checked').val();
        const pYesOrNo = $('input[name="p_yes_no"]:checked').val();
        const guestNum = $('#guest-number').val();
        const comments = $('#comments').val();

        function checkFirstName() {
            if (firstName === '') {
                $('#first-name-div').next('p').remove();
                $('#first-name-div').nextAll('br').remove();
                $('#first-name-div').after('<p class = "error" >Please enter your first name.</p><br><br>');
                event.preventDefault();
            }
        }

        function checkLastName() {
            if (lastName === '') {
                $('#last-name-div').next('p').remove();
                $('#last-name-div').nextAll('br').remove();
                $('#last-name-div').after('<p class = "error" >Please enter your last name.</p><br><br>');
                event.preventDefault();
            }
        }

        function checkEmail() {
            if (email === '') {
                $('#email-div').next('p').remove();
                $('#email-div').nextAll('br').remove();
                $('#email-div').after('<p class = "error" >Please enter a valid email.</p><br><br><br>');
                event.preventDefault();
            }
        }

        function checkYesNo() {
            if (yesOrNo !== 'yes' && yesOrNo !== 'no') {
                $('#services-div').nextAll('p').remove();
                $('#services-div').nextAll('br').remove();
                $('#services-div').after('<br><p class = "error" >Please select whether or not you will be joining us for services.</p><br><br>');
                event.preventDefault();
            }
            if (pYesOrNo !== 'yes' && pYesOrNo !== 'no') {
                $('#party-div').nextAll('p').remove();
                $('#part-div').nextAll('br').remove();
                $('#party-div').after('<br><p class = "error" >Please select whether or not you will be joining us for the party.</p><br><br>');
                event.preventDefault();
            }
        }

        function checkValid() {
            if (firstName !== '' && lastName !== '' && email !== '' && yesOrNo !== undefined && pYesOrNo !== undefined) {
                $('#rsvp-form').attr('action', 'process.php');
                $('#rsvp-form').submit();
                return;
            }
            checkFirstName();
            checkLastName();
            checkEmail();
            checkYesNo();
            if (firstName !== '') {
                $('#first-name-div').next('p').remove();
                $('#first-name-div').nextAll('br').remove();
            }
            if (lastName !== '') {
                $('#last-name-div').next('p').remove();
                $('#last-name-div').nextAll('br').remove();
            }
            if (email !== '') {
                $('#email-div').next('p').remove();
                $('#email-div').nextAll('br').remove();
            }
            if (yesOrNo !== undefined) {
                $('#services-div').nextAll('p').remove();
                $('#services-div').nextAll('br').remove();
            }
            if (pYesOrNo !== undefined) {
                $('#party-div').nextAll('p').remove();
                $('#party-div').nextAll('br').remove();
            }
        }
        checkValid();
        return;
    });
}
ensureValid();
