<?php
# Written for the MIT IEEE/ACM website by Frank Yaul, Cathy Wu, modified for lastest web by Donald Little

/* $return = "../index.php?p=join"; */
$rmessage = "";

$ieeeemail = "ieee-acm-webmaster@mit.edu";

$applicant_name = $_POST['first-name'] . " " . $_POST['last-name'];
$applicant_email = $_POST['email'];
    
$apply_date = date("F j, Y, g:i a");

//Name & Email must be filled in...
if ($applicant_name != "" && $applicant_email != "") {

    $applicant_email = strtolower($applicant_email);
    if (!strstr($applicant_email, "mit.edu")) {
        $response_array["status"] = "error";
        $response_message = "Email Address Problem - The email address you specify must be an MIT email address. Please double-check your form."; 
        $response_array["message"] = $response_message;
        $response_array["code"] = 100;
        header('Content-type: application/json');
    		echo json_encode($response_array);
      	exit;
      }
  
	   $subject = "[MIT IEEE/ACM] New Member Request: $applicant_email";  
  
	   $message =  "This is an automated message generated by the membership application form on the MIT IEEE/ACM club homepage.\n\n$apply_date\nName: $applicant_name\nEmail: $applicant_email\n\n---\n\nieee-members mailing list: https://groups.mit.edu/webmoira/list/ieee-members";
  
		  if (mail($ieeeemail, $subject, $message)) {
          $welcome_message = "Hi $applicant_name,\n\nWelcome to the MIT IEEE/ACM Club! You’ve successfully registered yourself onto our mailing list. Be on the lookout for emails from us about study break, faculty dinners, technical events and more! If you are interested in getting more involved with MIT IEEE/ACM, check out our sub-committees under the Programs tab and reach out to our exec team. We hope to see you at one of our events soon!\n\nBest,\nMIT IEEE/ACM Exec Board";
          mail($applicant_email, "MIT IEEE/ACM Membership Confirmation", $welcome_message);
          $response_array["status"] = "success";
    			$response_message = "Success! - Your membership request was successful! You should receive a confirmation email shortly.";
          $response_array["message"] = $response_message;
          header('Content-type: application/json');
          echo json_encode($response_array);
    			exit;
  			
  			} else {
            $response_array["status"] = "error"
          	$response_message = "Message Delivery Failed - Please try again later. At this time, there may be an excess amount of requests."; 
            $response_array["message"] = $response_message;
            $response_array["code"] = 101
            header('Content-type: application/json');
            echo json_encode($response_array);
            exit;
  			}
  	
  }
?>
