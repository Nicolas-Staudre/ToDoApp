import {Component, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import {Task} from "../../models/task";
import {TaskProvider} from "../../providers/task/task";
import moment from "moment";
import * as _ from "lodash";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  ngOnInit () : void {
    /**
     * S'applique au chargement de l'application
     */

    this.taskProvider.get().then(
      tasks => {
        if(null !== tasks){
          this.tasks = tasks;
        }
      }
    )


  }

  constructor(public navCtrl: NavController,
              public taskProvider: TaskProvider) {

  }

  /**
   * Création d'une tâche.
   * @type {Task}
   */
  task: Task = new Task();

  /**
   * Création d'un tableau de task pour la liste de tâches
   * @type {Task[]}
   */
  tasks: Task[] = [];

  /**
   * Variable booléenne pour réinitialiser le formulaire
   */
  active: boolean = true;


  date: Date = new Date();
  now: string = moment().format('YYYY-MM-DD');


  /**
   * Déclenche l'enregistrement d'une nouvelle tâche.
   * J'ajoute la tâche et je sauvegarde le tout.
   */
  saveTask():void {

    // Si l'utilisateur a bien saisie la tâche, j'ajoute la tâche
    if(undefined !== this.task.name && "" !== this.task.name) {
      // Je mets ma 'task' dans mon tableau 'tasks'
      this.task.id = Date.now();
      this.tasks.push(this.task);
      this.taskProvider.save(this.tasks);
    }

    /** Puis je réinitialise le formulaire*/

    this.task = new Task();
    this.active = false;
    setTimeout( () => this.active = true, 0);
  }

  /**
   * Déclenche l'enregistrement lors de la pression sur "Entrer"
   * @param {number} keyCode
   */
  checkKey(keyCode: number): void {
    if (keyCode === 13 ) {
      this.saveTask();
    }
  }

  /**
   * Enregistre les tâches
   */
  saveOurTasks() {
    this.taskProvider.save(this.tasks);
    }

  deleteTask(task: Task): void {
    _.pullAllWith (this.tasks, [task], _.isEqual);
    this.taskProvider.save(this.tasks);
  }
}
