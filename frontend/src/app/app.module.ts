import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { FormsModule } from '@angular/forms';
import { NoteColumnComponent } from './note-column/note-column.component';
import { NoteDataColumnComponent } from './note-data-column/note-data-column.component';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import { ContenteditableModule } from '@ng-stack/contenteditable';
import { PreviewContentPipe } from './preview-content.pipe';
import { ConfigMenuComponent } from './config-menu/config-menu.component';
import { MenuDirViewComponent } from './menu-dir-view/menu-dir-view.component';
import { TreeviewModule } from 'ngx-treeview';
import { NoteViewComponent } from './note-view/note-view.component';
import { NotebookViewComponent } from './notebook-view/notebook-view.component';
import { NotificationComponent } from './notification/notification.component';
import { PopupComponent } from './popup/popup.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    NoteColumnComponent,
    NoteDataColumnComponent,
    PreviewContentPipe,
    ConfigMenuComponent,
    MenuDirViewComponent,
    NoteViewComponent,
    NotebookViewComponent,
    NotificationComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CodemirrorModule,
    ContenteditableModule,
    TreeviewModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }