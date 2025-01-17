import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BDM } from '../../../../Models/BDM';
import { Project } from '../../../../Models/Project';
import { ProjectServiceService } from '../../../../Services/Project/project-service.service';
import { BDmService } from '../../../../Services/BDM/bdm.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-project',
  templateUrl: './manage-project.component.html',
  styleUrl: './manage-project.component.css'
})
export class ManageProjectComponent implements OnInit {

  error: string = 'Enter the fields then try again...'

  constructor(private projectSeivce: ProjectServiceService,
    private bdmservice: BDmService,
    private route: Router
  ) { }
  ngOnInit(): void {
    this.GetProjects();
    this.GetBDMs();
  }

  @ViewChild('topSection') topSection: ElementRef | undefined;

  bdmList: BDM[] = [];
  projectList: Project[] = [];
  projectData: Project = new Project();
  selectedIds: number[] = [];
  value: string = '';

  navigatetoManage(): void {
    this.route.navigate(['/manage']);
  }

  GetProjects(): any {
    debugger
    this.projectSeivce.GetProjects().subscribe({
      next: (responce: any) => {
        if (responce.StatusCode === 200 || 201) {
          this.projectList = responce.Data;
        }
        else {
          console.log("Error:", responce.StatusCode);
          console.log("Error:", responce.Message);
        }
      },
      error: (error: any) => {
        console.log("HTTP Error Project :", error.message);
      }
    });
  };

  GetBDMs(): any {
    this.bdmservice.GetBDMs().subscribe({
      next: (responce: any) => {
        if (responce.StatusCode === 200 || 201) {
          this.bdmList = responce.Data;
        }
        else {
          console.log("Error:", responce.StatusCode);
          console.log("Error:", responce.Message);
        }
      },
      error: (error: any) => {
        console.log("HTTP Error Project :", error.message);
      }
    });
  };


  DeleteProject(PId: number): any {
    const confirmed = window.confirm("Are you sure to Delete Project ...!");
    if (confirmed) {

      this.projectSeivce.DeleteProject(PId).subscribe({
        next: (responce: any) => {
          if (responce.StatusCode === 200 || 201) {
            this.GetProjects();
          }
          else {
            console.log("Error:", responce.StatusCode);
            console.log("Error:", responce.Message);
          }
        },
        error: (error: any) => {
          console.log("HTTP Error Project :", error.message);
        }
      });
    }
  };

  AddProject(): any {
    if (this.projectData.ProjectName.length > 1) {
      this.projectSeivce.AddProjects(this.projectData).subscribe({
        next: (responce: any) => {
          if (responce.StatusCode === 200 || 201) {
            this.GetProjects();
            alert(responce.Message);
            this.projectData = new Project();
          }
          else {
            alert(responce.Message);

            console.log("Error:", responce.Message);
          }
        },
        error: (error: any) => {
          console.log("HTTP Error Project :", error.message);
          alert(error.message);
        }
      });
    }
    else {
      alert(this.error);
    }
  }

  UpdateProject(): any {
    debugger
    this.projectSeivce.UpdateProjects(this.projectData).subscribe({
      next: (responce: any) => {
        if (responce.StatusCode === 200 || 201) {
          this.GetProjects();
          alert(responce.Message);
          this.projectData = new Project();
        }
        else {
          alert(responce.Message);

          console.log("Error:", responce.Message);
        }
      },
      error: (error: any) => {
        console.log("HTTP Error Project :", error.message);
        alert(error.message);
      }
    });
  }

  GetProjectByPId(PId: number): any {
    this.projectSeivce.GetProjectByPId(PId).subscribe({
      next: (responce: any) => {
        if (responce.StatusCode === 200 || 201) {
          this.projectData = responce.Data;
        }
        else {
          alert(responce.Message);

          console.log("Error:", responce.Message);
        }
      },
      error: (error: any) => {
        console.log("HTTP Error Project :", error.message);
        alert(error.message);
      }
    });
  }
  toggleSelection(event: any) {
    const id = +event.target.value;
    if (event.target.checked) {
      this.selectedIds.push(id);
    } else {
      this.selectedIds = this.selectedIds.filter(selectedId => selectedId !== id);
    }
    this.value = this.selectedIds.toString();
    console.log("result", this.value);
  }

  DeleteProjects(): any {
    const confirm = window.confirm("Do you want to delete All Records");
    if (confirm) {
      this.selectedIds = this.projectList
        .filter(item => item.PId)
        .map(item => item.PId);
        
      this.value = this.selectedIds.toString();
      this.projectSeivce.DeleteProjects(this.value).subscribe({
        next: (responce: any) => {
          if (responce.IsSuccess) {
            alert(responce.Message);
            this.GetProjects();
          }
          else {
            alert(responce.Message);
            this.GetProjects();
          }
        }
      })
    }
  }

}
