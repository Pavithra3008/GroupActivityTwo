$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('GroupTerrain\terrain.feature');
formatter.feature({
  "line": 1,
  "name": "End to end Functionality",
  "description": "",
  "id": "end-to-end-functionality",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Registration button exists",
  "description": "",
  "id": "end-to-end-functionality;registration-button-exists",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I open guru99 website",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user enter valid data on the page",
  "rows": [
    {
      "cells": [
        "Fields",
        "Values"
      ],
      "line": 9
    },
    {
      "cells": [
        "Title",
        "Miss"
      ],
      "line": 10
    },
    {
      "cells": [
        "First Name",
        "Nithya"
      ],
      "line": 11
    },
    {
      "cells": [
        "Surname",
        "Shanthanu"
      ],
      "line": 12
    },
    {
      "cells": [
        "Phone",
        "9807896541"
      ],
      "line": 13
    },
    {
      "cells": [
        "Year_DOB",
        "1994"
      ],
      "line": 14
    },
    {
      "cells": [
        "Month_DOB",
        "October"
      ],
      "line": 15
    },
    {
      "cells": [
        "Date_DOB",
        "17"
      ],
      "line": 16
    },
    {
      "cells": [
        "License Period",
        "10"
      ],
      "line": 17
    },
    {
      "cells": [
        "Occupation",
        "Social worker"
      ],
      "line": 18
    },
    {
      "cells": [
        "Address",
        "Rangan Street"
      ],
      "line": 19
    },
    {
      "cells": [
        "City",
        "Chennai"
      ],
      "line": 20
    },
    {
      "cells": [
        "Country",
        "India"
      ],
      "line": 21
    },
    {
      "cells": [
        "Postal code",
        "600 006"
      ],
      "line": 22
    },
    {
      "cells": [
        "Email id",
        "nithya@gmail.com"
      ],
      "line": 23
    },
    {
      "cells": [
        "Password",
        "urspassword@123"
      ],
      "line": 24
    },
    {
      "cells": [
        "Confirm password",
        "urspassword@123"
      ],
      "line": 25
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "the user registration should be successful",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "User enters valid data",
  "rows": [
    {
      "cells": [
        "Fields",
        "Values"
      ],
      "line": 30
    },
    {
      "cells": [
        "nithya@gmail.com",
        "urspassword@123"
      ],
      "line": 31
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "Successful Login",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "user enters valid data details on the page",
  "rows": [
    {
      "cells": [
        "Fields",
        "values"
      ],
      "line": 36
    },
    {
      "cells": [
        "Quantity",
        "2"
      ],
      "line": 37
    },
    {
      "cells": [
        "card_nmuber",
        "7493037578241902"
      ],
      "line": 38
    },
    {
      "cells": [
        "month",
        "02"
      ],
      "line": 39
    },
    {
      "cells": [
        "year",
        "2022"
      ],
      "line": 40
    },
    {
      "cells": [
        "cvv_code",
        "989"
      ],
      "line": 41
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "payment should be done",
  "keyword": "Then "
});
formatter.match({
  "location": "TerrainAct.open_guru99()"
});
formatter.result({
  "duration": 5005537200,
  "status": "passed"
});
formatter.match({
  "location": "TerrainAct.enter_data_Reg(DataTable)"
});
formatter.result({
  "duration": 9299324900,
  "status": "passed"
});
formatter.match({
  "location": "TerrainAct.success_Reg()"
});
formatter.result({
  "duration": 930207800,
  "status": "passed"
});
formatter.match({
  "location": "TerrainAct.enter_data(DataTable)"
});
formatter.result({
  "duration": 5252699200,
  "status": "passed"
});
formatter.match({
  "location": "TerrainAct.success_login()"
});
formatter.result({
  "duration": 835164200,
  "status": "passed"
});
formatter.match({
  "location": "TerrainAct.enter_Data(DataTable)"
});
formatter.result({
  "duration": 20598926800,
  "status": "passed"
});
formatter.match({
  "location": "TerrainAct.payment_Successful()"
});
formatter.result({
  "duration": 447525200,
  "status": "passed"
});
});