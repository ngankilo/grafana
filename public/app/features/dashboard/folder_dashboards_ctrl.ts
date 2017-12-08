import {FolderPageLoader} from './folder_page_loader';

export class FolderDashboardsCtrl {
  navModel: any;
  folderId: number;

  /** @ngInject */
  constructor(private backendSrv, navModelSrv, private $routeParams) {
    if (this.$routeParams.folderId && this.$routeParams.type && this.$routeParams.slug) {
      this.folderId = $routeParams.folderId;
      this.navModel = navModelSrv.getNav('manage-folder', 'manage-folder-dashboards', 0);

      new FolderPageLoader(this.backendSrv, this.$routeParams).load(this.navModel, this.folderId);
    }
  }
}
