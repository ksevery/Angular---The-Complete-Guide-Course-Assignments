import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Observable, timer } from "rxjs";
import { map, take } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  form: FormGroup;
  statuses = ["Stable", "Critical", "Finished"];

  ngOnInit(): void {
    this.form = new FormGroup({
      projectName: new FormControl(
        null,
        [Validators.required],
        this.forbiddenProjectNamesAsync
      ),
      mail: new FormControl(null, [Validators.required, Validators.email]),
      projectStatus: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }

  forbiddenProjectNames(control: FormControl): { [s: string]: boolean } {
    if (control.value === "Test") {
      return { nameIsForbidden: true };
    }

    return null;
  }

  forbiddenProjectNamesAsync(
    control: FormControl
  ): Promise<{ [s: string]: boolean }> | Observable<{ [s: string]: boolean }> {
    return timer(2000).pipe(
      take(1),
      map(() => {
        if (control.value === "Test") {
          return { nameIsForbidden: true };
        }

        return null;
      })
    );
  }
}
