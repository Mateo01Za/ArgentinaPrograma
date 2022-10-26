import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, list, getDownloadURL } from '@angular/fire/storage';
@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private storage: Storage) { }
  url: string = "";
  public uploadImage($event: any, name: string){
    const file = $event.target.files[0]
    const imgRef = ref(this.storage, `imagen/` + name) 
    uploadBytes(imgRef, file)
    .then(response => this.getImages())
    .catch(error => console.log(error)
    )   
  }

  getImages(){
    const imageRef = ref(this.storage, 'imagen')
    list(imageRef)
    .then(async response => {
      for (let item of response.items){
        this.url = await getDownloadURL(item);
        console.log("la url es "+ this.url);
        
      }
    })
    .catch(error => console.log(error))
  }
}

