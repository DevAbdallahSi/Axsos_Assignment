<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>

<body>
    <header>
        <label for="counter">Your Gold:
            <input type="text" name="counter" value="1" disabled>
        </label>
    </header>
    <section>
        <div>
            <form action="" method="post">
                <p>Farm</p>
                <p>(earns 10-20 gold)</p>
                <input type="submit" value="Find Gold!" name="hold">
                <input type="hidden" name="hide" value="farm">
            </form>
        </div>
        <div>
            <form action="" method="post">
                <p>Cave</p>
                <p>(earns 10-20 gold)</p>
                <input type="submit" value="Find Gold!" name="hold">
                <input type="hidden" name="hide" value="cave">
            </form>
        </div>
        <div>
            <form action="" method="post">
                <p>House</p>
                <p>(earns 10-20 gold)</p>
                <input type="submit" value="Find Gold!" name="hold">
                <input type="hidden" name="hide" value="house">
            </form>
        </div>
        <div>
            <form action="" method="post">
                <p>Quest</p>
                <p>(earns/takes 0-50 gold)</p>
                <input type="submit" value="Find Gold!" name="hold">
                <input type="hidden" name="hidethis" value="guest">
            </form>
        </div>
        <div>
            <form action="" method="post">
                <p>reset</p>
                <p>start again</p>
                <input type="submit" value="New game!" name="hold">
            </form>
        </div>
    </section>
    <article class="container my-4">
        <h3 class="mb-3">Activity Log</h3>
        <div class="border rounded p-3 bg-light" style="max-height: 300px; overflow-y: auto;">
            
                    <p class="text-danger mb-1"></p>
                    <p class="text-success mb-1"></p>
        </div>
    </article>
</body>

</html>