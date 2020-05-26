import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FileUploader} from 'ng2-file-upload';

const baseUrl = 'http://localhost:3000/api/addlist';

@Injectable({
  providedIn: 'root'
})
export class AddListService {

  public uploader: FileUploader = new FileUploader({ url: baseUrl, itemAlias: 'photo' });

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(baseUrl);
  }

  get(id) {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data) {
    return this.http.post(baseUrl, data);
  }

  update(id, data) {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id) {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll() {
    return this.http.delete(baseUrl);
  }

  findByUser(username, password) {
    console.log(username+", "+password);
    return this.http.get(`${baseUrl}/${username}/${password}`);
  }

  uploadImage(){
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
         console.log('ImageUpload:uploaded:', item, status, response);
         alert('File uploaded successfully');
    }
  }
}
