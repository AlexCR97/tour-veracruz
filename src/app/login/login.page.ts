import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private todo : FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastController: ToastController,
    private router: Router
  ) {
    this.todo = this.formBuilder.group({
      username: [''],
      password: [''],
    });
  }

  ngOnInit() { }

  login() {
    console.log("Login successful!")
    this.router.navigateByUrl('/tabs');
  }

  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  submitForm() {
    let data = this.todo.value;
    let username = data.username;
    let password = data.password;

    console.log("Username: " + username);
    console.log("Password: " + password);

    /*if (username != "admin") {
      console.log("Wrong username!");
      this.presentToast("Wrong username!");
      return;
    }

    if (password != "pass") {
      console.log("Wrong password!");
      this.presentToast("Wrong password!");
      return;
    }*/

    this.login();
  }
}
