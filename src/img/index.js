import React from 'react'

export const Discount = 'data:image/png;base64,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'

export const PlitkaPlus = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIvSURBVHgB7VVNbtNQEJ4ZOyUSLF4KBwg3SDaQssFHCCcg3KDZIWSURKTr5AaUEzScIGaBopZFwwnICdpXCaTS2POY99pUtuPQeIdEJ3LiN/7yzffm5xngvze1f6rU21l903M/AxYg+t5HBAjSfmPMwiAc6uHzQZ7Ae7Q8YoMXctsuCkDphZAfIUJDKD+lLyQUIPZVOAuKSABJwTY7EOUNw/z5/KDVSftVf1an2PtBQIEsIyhh/roYOv/bH67TSCNBOtVGRIkwqIUn0xXG/Ky80uOmtvcEZa1a1ZKuGlktdtOWHR3RzdpcgLpUG3dwl+m+Uxas1o9FOQvx2fBZUITPBkDQhqGh3n1twA7plZsSdB2CyAsoabkd8ACRRoiVU4hzSDSLxFsvMBtJCeJ2XXT2oTV+En6bM3CQI9fsPTi8SU/GTIX3pTB6qwDWYvlQrvacGA1LVzhHZKeXHv7uOOVup1ewGx6DCIv0cC/KaEsvBNQTVx8KzE3zr50mVC8Vet5UBrJehGMTd/XBi/FqTVkS7Nhcs588TV+A3EXEulNNXuDIDXezOGjKTMwJ/R5sStG1KpRc7y3SfpnkCcUwsikhNMpunCtmksdJBr7Ls0baV37QSto/EuDKU9vAjIE1XP40jQTUroXHSop629t2uu0vA0W+9CWD18MlTXffn0TZCPBSvucbAyR+8kaO5YmcWG17TN4GJul/Zmm/liOUYg7kHfFaMJ2cwC/CkfHd2532B0xz2HrZDKtCAAAAAElFTkSuQmCC'

export const Planirovka = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGtSURBVHgB1VUxVsJAEJ1ZwJYY7YUjUIhi5Q3gCHgCpfMJPvJehBY4ATmC3oAOwYIjCD3w1lqTcTYQSEL0EdCC/94WOzt//u7OzC7AoQP9E/3x9Q4ccQs7ggAkkd2RzYK1IaA9DMtCQJctEhz6CDAFppmtRa5F+Dn0VZGNq7YyJVdKAtTOpZOwc9IsjP28ExYnFkcbKrPmhfVTfM3oZ4SdGAlKqliugFgJEB2zupRGMHgcuNzQCQX8Mw5fIAl7QJU1kSgiQWZlRDjjXI73FlBlzYFaqEqX/IkNtNbuAohUUsHCZa1XB2O/yM45EMhNBcvS/M0PYsARVNTu+5k4nK2uyD5KPQv7s46EJZGCFzZZ3prqcr8vd3waHM5LHAFp5BQhe1p7u56ahV4oYDfgTAtKLAEP06fzXtiGDtwE4iegtRSJLxCFWTNv+edcRcafVNG2CAogaHGrxA+Xq/4EjMqBoDYQtkQyMdKrQ8+hN2/k3TvWa4M6r5c9d75mzbVXh+/+DaoPB9HubJxgbl62ue1VsAnTUQ2eZ9dk9Rws7O5QzwPRZNPmVGbm+ss8fHwDEKmqGgiEseoAAAAASUVORK5CYII='

export const Spisok = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABVSURBVHgB7dKxDcAgEANAf5QFskEyRYZLneWyRNiAEYwoQBQ0iAKBfNXrC7sxIMuzdBzP9wOEf++r/JnhRCOSLuXsuWmrtMcf0ayWJeNoRdJPK5IJBJwGKihPmAV4AAAAAElFTkSuQmCC'
