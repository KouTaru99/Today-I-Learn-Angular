import { Component } from '@angular/core';

@Component({
  selector: 'app-show-table-group',
  templateUrl: './show-table-group.component.html',
  styleUrls: ['./show-table-group.component.scss']
})
export class ShowTableGroupComponent {

  dataSource = [
    {
    "id": 0,
    "name": "Ramsey Cummings",
    "gender": "male",
    "age": 52,
    "address": {
      "state": "South Carolina",
      "city": "Glendale"
    },
    "group": [
      {
        "id": 0,
        "name": "Ramsey Cummings",
        "gender": "male",
        "age": 52,
        "address": {
          "state": "South Carolina",
          "city": "Glendale"
        }
      },
      {
        "id": 1,
        "name": "Stefanie Huff",
        "gender": "female",
        "age": 70,
        "address": {
          "state": "Arizona",
          "city": "Beaverdale"
        }
      },
    ]
  },
  {
    "id": 1,
    "name": "Stefanie Huff",
    "gender": "female",
    "age": 70,
    "address": {
      "state": "Arizona",
      "city": "Beaverdale"
    },
    "group": [
      {
        "id": 0,
        "name": "Ramsey Cummings",
        "gender": "male",
        "age": 52,
        "address": {
          "state": "South Carolina",
          "city": "Glendale"
        }
      },
      {
        "id": 1,
        "name": "Stefanie Huff",
        "gender": "female",
        "age": 70,
        "address": {
          "state": "Arizona",
          "city": "Beaverdale"
        }
      },
    ]
  },
  {
    "id": 2,
    "name": "Mabel David",
    "gender": "female",
    "age": 52,
    "address": {
      "state": "New Mexico",
      "city": "Grazierville"
    },
    "group": [
      {
        "id": 0,
        "name": "Ramsey Cummings",
        "gender": "male",
        "age": 52,
        "address": {
          "state": "South Carolina",
          "city": "Glendale"
        }
      },
      {
        "id": 1,
        "name": "Stefanie Huff",
        "gender": "female",
        "age": 70,
        "address": {
          "state": "Arizona",
          "city": "Beaverdale"
        }
      },
    ]
  },
  {
    "id": 3,
    "name": "Frank Bradford",
    "gender": "male",
    "age": 61,
    "address": {
      "state": "Wisconsin",
      "city": "Saranap"
    },
    "group": [
      {
        "id": 0,
        "name": "Ramsey Cummings",
        "gender": "male",
        "age": 52,
        "address": {
          "state": "South Carolina",
          "city": "Glendale"
        }
      },
      {
        "id": 1,
        "name": "Stefanie Huff",
        "gender": "female",
        "age": 70,
        "address": {
          "state": "Arizona",
          "city": "Beaverdale"
        }
      },
    ]
  },
  {
    "id": 4,
    "name": "Forbes Levine",
    "gender": "male",
    "age": 34,
    "address": {
      "state": "Vermont",
      "city": "Norris"
    },
    "group": [
      {
        "id": 0,
        "name": "Ramsey Cummings",
        "gender": "male",
        "age": 52,
        "address": {
          "state": "South Carolina",
          "city": "Glendale"
        }
      },
      {
        "id": 1,
        "name": "Stefanie Huff",
        "gender": "female",
        "age": 70,
        "address": {
          "state": "Arizona",
          "city": "Beaverdale"
        }
      },
    ]
  }
];
colConfigs = [
  {
    key: "id",
    name: "Id",
  },
  {
    key: "name",
    name: "Name",
  },
  {
    key: "gender",
    name: "Gender",
  },
  {
    key: "age",
    name: "Age",
  },
  {
    key: "address.state",
    name: "State",
  },
  {
    key: "address.city",
    name: "City",
  },
]
colConfigChild = [
  {
    key: "id",
    name: "Id",
  },
  {
    key: "name",
    name: "Name",
  },
  {
    key: "gender",
    name: "Gender",
  },
  {
    key: "age",
    name: "Age",
  },
  {
    key: "address.state",
    name: "State",
  },
  {
    key: "address.city",
    name: "City",
  },
]
}
