import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { MycomponentComponent } from './mycomponent.component';

describe('MycomponentComponent', () => {
  let component: MycomponentComponent;
  let fixture: ComponentFixture<MycomponentComponent>;
  let componentHTML:HTMLElement;
  let componentDebugElement:DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MycomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MycomponentComponent);
    component = fixture.componentInstance;
    //fixture.detectChanges();
    componentDebugElement=fixture.debugElement;
    componentHTML=componentDebugElement.nativeElement;
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should tesy value',async () => {
    expect(component.content).toEqual("hello");
  });

  it('la div content doit etre recuperer',async ()=>{

    fixture.detectChanges();
    expect(componentHTML.querySelector('#contentDiv')?.textContent).toContain(component.content);
  });

  it('la div content doit etre recuperer version 2',async ()=>{
    let contentdebug=componentDebugElement.query(By.css('#contentDiv'));
    //fixture.detectChanges();
    expect(contentdebug.nativeElement.textContent).toContain(component.content);
  });


});
