fetch("https://opensheet.elk.sh/1a7l6J1JBG_HKNkGrJ1FY_WI3U7ZbCY9RKzyJvWLPDu4/1")
    .then((res) => res.json())
    .then(data => console.log(data))