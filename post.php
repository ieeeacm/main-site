<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>MIT IEEE/ACM</title>

    <link href="stylesheets/blog.css" rel="stylesheet">
    <link href="stylesheets/main.css" rel="stylesheet">
    <!--Import Google Icon Font-->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

    <script src="js/jquery.js"></script>
    <script type='text/javascript' src='js/materialize.min.js'></script>
    <script src="js/ieee.js" type="text/javascript"></script>
    <script src="js/blog.js" type="text/javascript"></script>

</head>

<body>

    <nav class="z-depth-0">
        <div class="nav-wrapper">
            <a href="/" class="brand-logo"><img class="logo hide-on-med-and-down" src="images/logo-white.png"></a>
            <a href="#" data-activates="mobile-nav" class="button-collapse"><i class="material-icons">menu</i></a>
            <ul class="right hide-on-med-and-down">
                <li><a href="/club/">HOME</a></li>
                <li><a href="blog.php">BLOG</a></li>
            </ul>
            <ul class="side-nav" id="mobile-nav">
                <li><a href="/club/">HOME</a></li>
                <li><a href="blog.php">BLOG</a></li>
            </ul>
        </div>
    </nav>

    <div class="container post-container">
        <div class="row">
            <?php
                $number = 1;
                $template = "Home";
                $only_active = TRUE;
                include("blog/show_news.php");
            ?>
        </div>
    </div>

</body>

</html>
