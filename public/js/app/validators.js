"use strict";
var AppValidators = (function () {
    function AppValidators() {
    }
    AppValidators.isEmail = function (control) {
        if (!control.value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
            return { invalidMail: true };
        }
    };
    AppValidators.isSecure = function (control) {
        var p = 0;
        for (var _i = 0, _a = control.value; _i < _a.length; _i++) {
            var char = _a[_i];
            if (char == char.toUpperCase()) {
                p++;
            }
            if (char == char.toLowerCase()) {
                p++;
            }
            if (!isNaN(char)) {
                p++;
            }
            if (char.match(/^[a-zA-Z0-9- ]*$/)) {
                p++;
            }
        }
        console.log(p);
        if (p >= 4) {
            return { secure: true };
        }
    };
    AppValidators.points = 0;
    return AppValidators;
}());
exports.AppValidators = AppValidators;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhbGlkYXRvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBO0lBQUE7SUE2QkEsQ0FBQztJQTFCVSxxQkFBTyxHQUFkLFVBQWUsT0FBZ0I7UUFDM0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDLENBQUEsQ0FBQztZQUMxRCxNQUFNLENBQUMsRUFBQyxXQUFXLEVBQUUsSUFBSSxFQUFDLENBQUM7UUFDL0IsQ0FBQztJQUNMLENBQUM7SUFDTSxzQkFBUSxHQUFmLFVBQWdCLE9BQWdCO1FBQzVCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNWLEdBQUcsQ0FBQyxDQUFhLFVBQWEsRUFBYixLQUFBLE9BQU8sQ0FBQyxLQUFLLEVBQWIsY0FBYSxFQUFiLElBQWEsQ0FBQztZQUExQixJQUFJLElBQUksU0FBQTtZQUNULEVBQUUsQ0FBQSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQSxDQUFDO2dCQUMzQixDQUFDLEVBQUUsQ0FBQztZQUNSLENBQUM7WUFDRCxFQUFFLENBQUEsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUEsQ0FBQztnQkFDM0IsQ0FBQyxFQUFFLENBQUM7WUFDUixDQUFDO1lBQ0QsRUFBRSxDQUFBLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQSxDQUFDO2dCQUNiLENBQUMsRUFBRSxDQUFDO1lBQ1IsQ0FBQztZQUNELEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFBLENBQUM7Z0JBQy9CLENBQUMsRUFBRSxDQUFDO1lBQ1IsQ0FBQztTQUNKO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNmLEVBQUUsQ0FBQSxDQUFDLENBQUMsSUFBRSxDQUFDLENBQUMsQ0FBQSxDQUFDO1lBQ0wsTUFBTSxDQUFDLEVBQUMsTUFBTSxFQUFDLElBQUksRUFBQyxDQUFDO1FBQ3pCLENBQUM7SUFDTCxDQUFDO0lBM0JNLG9CQUFNLEdBQUcsQ0FBQyxDQUFDO0lBNEJ0QixvQkFBQztBQUFELENBN0JBLEFBNkJDLElBQUE7QUE3QlkscUJBQWEsZ0JBNkJ6QixDQUFBIiwiZmlsZSI6InZhbGlkYXRvcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmV4cG9ydCBjbGFzcyBBcHBWYWxpZGF0b3JzIHtcbiAgICBzdGF0aWMgcG9pbnRzID0gMDtcblxuICAgIHN0YXRpYyBpc0VtYWlsKGNvbnRyb2w6IENvbnRyb2wpOiB7W3M6IHN0cmluZ106IGJvb2xlYW59IHtcbiAgICAgICAgaWYgKCFjb250cm9sLnZhbHVlLm1hdGNoKC9eXFx3K0BbYS16QS1aX10rP1xcLlthLXpBLVpdezIsM30kLykpe1xuICAgICAgICAgICAgcmV0dXJuIHtpbnZhbGlkTWFpbDogdHJ1ZX07XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIGlzU2VjdXJlKGNvbnRyb2w6IENvbnRyb2wpOiB7W3M6IHN0cmluZ106IGJvb2xlYW59IHsgICAgXG4gICAgICAgIHZhciBwID0gMDtcbiAgICAgICAgZm9yICh2YXIgY2hhciBvZiBjb250cm9sLnZhbHVlKSB7XG4gICAgICAgICAgICBpZihjaGFyID09IGNoYXIudG9VcHBlckNhc2UoKSl7XG4gICAgICAgICAgICAgICAgcCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoY2hhciA9PSBjaGFyLnRvTG93ZXJDYXNlKCkpe1xuICAgICAgICAgICAgICAgIHArKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKCFpc05hTihjaGFyKSl7XG4gICAgICAgICAgICAgICAgcCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoY2hhci5tYXRjaCgvXlthLXpBLVowLTktIF0qJC8pKXtcbiAgICAgICAgICAgICAgICBwKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2cocCk7XG4gICAgICAgIGlmKHA+PTQpe1xuICAgICAgICAgICAgcmV0dXJuIHtzZWN1cmU6dHJ1ZX07XG4gICAgICAgIH1cbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
