package com.google.sps.servlets;

import com.google.gson.Gson;
import java.io.IOException;
import java.util.ArrayList;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/** Handles requests sent to the /show URL. Try running a server and navigating to /show! */
@WebServlet("/show")
public class FavShowServlet extends HttpServlet {

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
      ArrayList<String> show = new ArrayList<String>();
      show.add("Grey's Anatomy");
      show.add("Modern Family");
      show.add("Umbrella Academy");
      show.add("Criminal Mind");

      String json = convertToJson(show);

      response.setContentType("application/json;");
      response.getWriter().println(json);
  }

  private String convertToJson(ArrayList<String> show){
      Gson gson = new Gson();
      String json = gson.toJson(show);
      return json;
  }
}
