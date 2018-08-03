
import { Injectable } from '@angular/core';
import {Task} from "../../models/task";
import {Storage} from "@ionic/storage";

/**
 * Le but de notre provider sera d'ajouter et de récupérer des tâches
 */

@Injectable()
export class TaskProvider {

  constructor(private storage: Storage) {
    console.log('Hello TaskProvider Provider');
  }

  /**
   * Permet de sauvegarder les tâches
   * @param {Task[]} tasks
   */
    save(tasks: Task[]):void {
      this.storage.set('tasks', tasks);
  }


  /**
   * Permet de récupérer les tâches sauvegarder
   */
    get(): Promise<Task[]> {
      return this.storage.get('tasks');
  }




}
