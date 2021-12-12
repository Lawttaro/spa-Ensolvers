package com.ensolvers.back.rest;

import java.util.List;
import com.ensolvers.back.dto.*;

public class Input{

  private List<TaskDto> listTake;
  private Long idFold;
  

  public List<TaskDto> getTake(){
    return listTake;
  }

  public Long getidFold(){
    return idFold;
  }
}

