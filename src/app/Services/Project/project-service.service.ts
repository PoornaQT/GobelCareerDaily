import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URLS } from '../../Envirolmant/Env';
import { catchError, throwError } from 'rxjs';
import { Project } from '../../Models/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectServiceService {

  PROJECT_URL = `${API_URLS.API_URL}Project/`;

  constructor(private http: HttpClient) { }

  GetProjects(): any {
    return this.http.get(`${this.PROJECT_URL}GetProjects`).pipe(
      catchError(error => {
        console.error('Error occurred:', error);
        return throwError(() => new Error('Unable to fetch data from the server.'));
      })
    )
  }

  DeleteProject(PId: number): any {
    return this.http.delete(`${this.PROJECT_URL}DeleteProject/` + PId).pipe(
      catchError(error => {
        console.error('Error occurred:', error);
        return throwError(() => new Error('Unable to delete data from the server.'));
      })
    )
  }

  AddProjects(project: Project): any {
    return this.http.post(`${this.PROJECT_URL}AddProject`,project).pipe(
      catchError(error => {
        console.error('Error occurred:', error);
        return throwError(() => new Error('Unable to Add data from the server.'));
      })
    )
  }

  UpdateProjects(project: Project): any {
    return this.http.put(`${this.PROJECT_URL}UpdateProject`,project).pipe(
      catchError(error => {
        console.error('Error occurred:', error);
        return throwError(() => new Error('Unable to Add data from the server.'));
      })
    )
  }

  GetProjectByPId(PId: number): any {
    return this.http.get(`${this.PROJECT_URL}GetProjectByPId/`+PId).pipe(
      catchError(error => {
        console.error('Error occurred:', error);
        return throwError(() => new Error('Unable to Get data from the server.'));
      })
    )
  }

  DeleteProjects(PIds: string): any {
    console.log("URL",`${this.PROJECT_URL}DeleteProjects/` + PIds);
    
    return this.http.delete(`${this.PROJECT_URL}DeleteProjects/` + PIds).pipe(
      catchError(error => {
        console.error('Error occurred:', error);
        return throwError(() => new Error('Unable to delete data from the server.'));
      })
    )
  }
}
