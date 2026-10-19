const timetableData = {
  "CSE Core": {
    A: {
      year: "2nd Year",
      semester: "III Semester",
      session: "2026-27",
      room: "NEW BUILDING (NB)-109",

      timings: [
        "9:10-10:00",
        "10:00-10:50",
        "10:50-10:55",
        "10:55-11:45",
        "11:45-12:35",
        "12:35-1:25",
        "1:25-2:15",
        "2:15-3:05",
        "3:05-3:10",
        "3:10-4:00",
        "4:00-4:50",
      ],

      schedule: {
        Monday: [
          "COA",
          "DSTL",
          "BREAK",
          "DS",
          "MATH IV",
          "LUNCH",
          "MATH IV",
          "TC",
          "BREAK",
          "LIBRARY",
          "LIBRARY",
        ],

        Tuesday: [
          "DSTL (T)\n(A1+A2)",
          "MATH IV",
          "BREAK",
          "WDW-LAB-CSE-A1\nNB LAB-116/117\nAWS-LAB-CSE-A2\nNB LAB-118",
          "DS",
          "LUNCH",
          "TC (T)\n(A1+A2)",
          "COA",
          "BREAK",
          "MENTOR-MENTEE",
          "MENTOR-MENTEE",
        ],

        Wednesday: [
          "DS-LAB-CSE-A2\nNB LAB-107\nCOA LAB-CSE-A1\nOB LAB-408",
          "MATH IV",
          "BREAK",
          "DSTL",
          "MATH IV",
          "LUNCH",
          "COA",
          "DS",
          "BREAK",
          "MENTOR-MENTEE",
          "LIBRARY",
        ],

        Thursday: [
          "DS",
          "DSTL",
          "BREAK",
          "PYTHON PROGRAMMING\nNB LAB-111/112",
          "MATH IV",
          "LUNCH",
          "COA (T)\n(A1+A2)",
          "MATH IV (T)\n(A1+A2)",
          "BREAK",
          "M.P-LAB-CSE-A2\nNB LAB-136\nAWS-LAB-CSE-A1\nNB LAB-118",
          "M.P-LAB-CSE-A2\nNB LAB-136\nAWS-LAB-CSE-A1\nNB LAB-118",
        ],

        Friday: [
          "TC",
          "COA",
          "BREAK",
          "M.P-LAB-CSE-A1\nNB LAB-136\nWDW-LAB-CSE-A2\nNB LAB-116/117",
          "DSTL",
          "LUNCH",
          "DS (T)\n(A1+A2)",
          "DSTL",
          "BREAK",
          "LIBRARY",
          "LIBRARY",
        ],
      },

      subjects: {
        "Math IV": {
          code: "BAS-303",
          faculty: "Ms. Anamika Sinha",
          room: "NB-109",
        },

        "Technical Communication-TC": {
          code: "BAS-301",
          faculty: "Ms. Shubhangi Sinha",
          room: "NB-109",
        },

        "Data Structure-DS": {
          code: "BCS-301",
          faculty: "Mr. Prashant Sharma",
          room: "NB-109",
        },

        "Computer Organization & Architecture-COA": {
          code: "BCS-302",
          faculty: "Ms. Rakhi Puri",
          room: "NB-109",
        },

        "Discrete Structure & Theory of Logic-DSTL": {
          code: "BCS-303",
          faculty: "Mr. Vijay Tiwari",
          room: "NB-109",
        },

        "Python Programming-PP": {
          code: "BCC-302",
          faculty: "Mr. Nishant Awana",
          room: "NB LAB-111/112",
        },

        "Data Structure Lab-DS LAB": {
          code: "BCS-351",
          faculty: "Mr. Prashant Sharma",
          room: "NB LAB-107",
        },

        "Computer Organization & Architecture Lab-COA LAB": {
          code: "BCS-352",
          faculty: "Ms. Rakhi Puri",
          room: "OB LAB-408",
        },

        "Web Designing Workshop Lab-WDW LAB": {
          code: "BCS-353",
          faculty: "Ms. Tanmayee Tilekar",
          room: "NB LAB-116/117",
        },

        "Mini Project-M.P. LAB": {
          code: "BCC-351",
          faculty: "Mr. Vijay Tiwari",
          room: "NB LAB-136",
        },

        "AWS Training Academy-AWS LAB": {
          code: "NA",
          faculty: "Ms. Himani Sharma",
          room: "NB LAB-118",
        },
      },
    },
  },
};

export default timetableData;