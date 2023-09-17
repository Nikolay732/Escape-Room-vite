import { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import { Icon, LeafletMouseEvent, Marker } from 'leaflet';
import { BookingInfoData } from '../../types/booking';
import { CityCoords } from '../../types/city-coords';
import {useMap} from '../../hooks/useMap';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const';

type MapProps = {
  points: BookingInfoData[] | null;
  size: {
    height: string;
    width: string;
    margin: string;
  };
  city: CityCoords;
  selectedPoint: BookingInfoData | null;
  onPointChange: ((point: BookingInfoData) => void) | null;
  quest: {
    lat: number;
    lng: number;
  } | null;
}

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

export function Map({ points, size, city, selectedPoint, quest, onPointChange }: MapProps) {
  const mapRef = useRef(null);
  const map = useMap({ mapRef, city });

  const onClickHandler = (evt: LeafletMouseEvent) => {
    const point = points?.find((pointToFind) => evt.latlng.lat === pointToFind.location.coords[0] && evt.latlng.lng === pointToFind.location.coords[1]);
    if (point && onPointChange) {
      onPointChange(point);
    }
  };

  useEffect(() => {
    const markerList = map?.getPane('markerPane');
    markerList?.replaceChildren();

    if (map) {
      if (quest) {
        const marker = new Marker({
          lat: quest.lat,
          lng: quest.lng,
        });

        marker.setIcon(currentCustomIcon)
          .addTo(map);
      }
      points?.forEach((point) => {
        const marker = new Marker({
          lat: point.location.coords[0],
          lng: point.location.coords[1],
        });

        marker.setIcon(
          selectedPoint !== null && point.id === selectedPoint.id
            ? currentCustomIcon
            : defaultCustomIcon
        )
          .addTo(map);
        marker.on('click', onClickHandler);
      });
    }
  }, [map, selectedPoint, points]);

  return (
    <div
      ref={mapRef}
      style={{ height: size.height, width: size.width, margin: size.margin }}
    >

    </div>
  );
}
