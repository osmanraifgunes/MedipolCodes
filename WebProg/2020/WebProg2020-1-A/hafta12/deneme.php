<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
</head>

<body>

    <div class="container">
        <div class="row">
            <a class="btn btn-primary m-3" href="/login.php">
                giriş
            </a>
            <?=
                $_GET['em']
            ?>
        </div>
        <div class="row">
            <?php for ($i = 0; $i < 50; $i++) :  ?>
                <div class="col-4">
                    <div class="card m-3">
                        <div class="card-body">
                            marlin brando 1
                        </div>
                    </div>
                </div>
            <?php endfor; ?>

        </div>
    </div>
</body>

</html>