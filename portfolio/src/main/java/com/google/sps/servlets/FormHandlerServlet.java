package com.google.sps.servlets;

import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/form-handler")
public class FormHandlerServlet extends HttpServlet {
      int contact_counter = 0;

  @Override
  public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
      contact_counter++;
      // Get the value entered in the form.
      String nameValue = getParameter(request, "name-input", " ");
      String emailValue = getParameter(request, "email-input", " ");
      String textValue = getParameter(request, "text-input", " ");

      // Print the value so you can see it in the server logs.
      System.out.println("Contact: " + contact_counter);
      System.out.println("Name: " + nameValue);
      System.out.println("Email: " + emailValue);
      System.out.println("Text: " + textValue);
      
      // Write the value to the response so the user can see it.
      response.getWriter().println("Contact: " + contact_counter);
      response.getWriter().println("Name: " + nameValue);      
      response.getWriter().println("Email: " + emailValue);
      response.getWriter().println("Text: " + textValue);
      
      //redirect to home screen of portfolio page
      //response.sendRedirect("https://mjung-sps-summer22.appspot.com/");
  }

  private String getParameter(HttpServletRequest request, String name, String defaultValue) {
    String value = request.getParameter(name);
    if (value == null) {
      return defaultValue;
    }
    return value;
  }

}