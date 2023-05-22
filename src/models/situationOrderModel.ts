type EventosModel = {
  data: string;
  hora: string;
  local: string;
  status: string;
};

export interface SituationOrderModel {
  codigo: string;
  host: string;
  eventos: EventosModel[];
}
