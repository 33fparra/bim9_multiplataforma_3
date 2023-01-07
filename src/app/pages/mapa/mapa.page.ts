import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
declare var mapboxgl: any;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit, AfterViewInit {

  lat: number;
  lng: number;

  constructor( private route: ActivatedRoute) { }

  ngOnInit() {
    let geo: any = this.route.snapshot.paramMap.get('geo');
    geo = geo.substr(4);
    geo = geo.split(',');

    this.lat = Number(geo[0]);
    this.lng = Number(geo[2]);

    console.log(this.lat, this.lng);
  }

  ngAfterViewInit() {
    mapboxgl.accessToken = '';
    const map = new mapboxgl.Map({
      style: 'pk.eyJ1IjoiZmdhbGxhcmRvYTEiLCJhIjoiY2sxNzkyajk1MWUzYzNucWRzNmhvMHdhcyJ9.VANAOt1SMqp9sVwwCvs53Q',
      center: ['mapbox://styles/mapbox/light-v10'],
      zoom: 15.5,
      pitch: 45,
      bearing: -17.6,
      container: 'map',
      antialias: true
    })

    map.on('load', ()=>{
      map.resize();
      new mapboxgl.Marker({

      }).setLngLat([this.lng, this.lat]).addTo(map);

      // insert the layer beneath any symbol layer.
      const layers = map.getStyle().layers;

      let labelLayerId;
      for(let i = 0; i < layers.length; i++){
        labelLayerId = layers[i].id;
        break;
      }

      map.addLayer({
        'id':'',
        'source':'',
        'source-layer':'',
        'filter':'',
        'type':'',
        'minzoom':15,
        'paint': {
          'fill-extrusion-color':'#aaa',

         
          'fil-extrusion-heighr':[
            "interpolate", ["linear"], ["zoom"],
            15, 0,
            15.05, ["get", "height"]
          ],
          'fill-extrusion-base': [
            "interpolat", ["linear"], ["zoom"],
            15, 0,
            15.05, ["get", "min_height"]
          ],
          'fill-extrusion-opacity': .6

        }
      }, labelLayerId);

    });

  }

}

