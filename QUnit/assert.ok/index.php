<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>QUnit Example</title>
  <link rel="stylesheet" href="//code.jquery.com/qunit/qunit-1.18.0.css">
</head>
<body>
  <div id="qunit"></div>
  <div id="qunit-fixture"></div>
  <script src="//code.jquery.com/qunit/qunit-1.18.0.js"></script>
  <script src="tests.js"></script>
  <script type="text/javascript">

    // Let's test this function
    function isEven(val) {
        return val % 2 === 0;
    }

  </script>
</body>
</html>
