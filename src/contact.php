<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "gaakrs@gmail.com";  // change to your Gmail
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $subject = htmlspecialchars($_POST["subject"]);
    $message = htmlspecialchars($_POST["message"]);

    $headers = "From: $name <$email>" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "Content-Type: text/plain; charset=UTF-8";

    $body = "You received a new message:\n\n" .
            "Name: $name\n" .
            "Email: $email\n" .
            "Subject: $subject\n\n" .
            "Message:\n$message";

    if (mail($to, $subject, $body, $headers)) {
        http_response_code(200);
    } else {
        http_response_code(500);
    }
} else {
    http_response_code(403); // Forbidden
}
?>
<?php
if (mail("your-email@gmail.com", "Test Email", "This is a test message from PHP")) {
    echo "Mail sent successfully!";
} else {
    echo "Mail failed to send.";
}
?>