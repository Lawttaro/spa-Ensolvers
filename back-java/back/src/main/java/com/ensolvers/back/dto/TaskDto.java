package com.ensolvers.back.dto;

import java.io.Serializable;


public class TaskDto implements Serializable{
  private long id;
  private String name;
  private long infold;

  public long getId(){
    return id;
  }

  public String getName(){
    return name;
  }

  public void setId(Long id){
    this.id = id;
  }

  public void setName(String name){
    this.name = name;
  }

  public long getInfold(){
    return infold;
  }

  public void setInfold(long idFold){
    this.infold = idFold;
  }

}