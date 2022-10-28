import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, list, getDownloadURL } from '@angular/fire/storage';
@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private storage: Storage) { }
  url: string = "";
  urldev: string = "";
  purl: string = "https://firebasestorage.googleapis.com/v0/b/mz-frontend.appspot.com/o/imagen%2F";
  public uploadImage($event: any, name: string){
    const file = $event.target.files[0]
    const imgRef = ref(this.storage, `imagen/` + name) 
    uploadBytes(imgRef, file)
    .then(response => {this.getImages(name)})
    .catch(error => console.log(error)
    )   
  }

  getImages(name2: string){
    const imageRef = ref(this.storage, 'imagen')
    list(imageRef)
    .then(async response => {
      for (let item of response.items){
        this.url = await getDownloadURL(item);
        console.log("la url es "+ this.url);
        if(this.url.slice(0, -53) == this.purl.concat(name2))
        {
          this.urldev = this.url;
          console.log("la urldev cambio a " + this.urldev );
          break;
          
        }
        
      }
    })
    .catch(error => console.log(error))
  }

  clearUrl() {
    this.url = "";
  }

}

