declare interface IProducts {
  Products: {
    products: {
      title: string;
      text: string;
      tags: string;
      autor: string;
      img: string;
      img_2x: string;
      date: string;
      views: string;
    }[];
  };
}

declare interface IAlertSite {
  AlertSite: {
    open: {
      status: any;
      go: boolean;
    };
    vertical: string;
    horizontal: string;
    message: string;
  };
}

declare interface IProduct {
  title: string;
  text: string;
  tags: string;
  autor: string;
  img: string;
  img_2x: string;
  date: string;
  views: string;
}
