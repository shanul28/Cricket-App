import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FavoritePlayers } from "./favorite-players";

@Injectable({
    providedIn: "root"
})

export class FavoriteService{
    constructor(private http: HttpClient){
        
    }

    url: string = "http://localhost:8085/Players";
    getPlayer(){
        return this.http.get<FavoritePlayers[]>(this.url);
    }

    addFavorite(player: FavoritePlayers){
        return this.http.post<FavoritePlayers>(this.url, player);
    }

    deletePlayer(id: string){
        return this.http.delete(`${this.url}/${id}`);
    }
}