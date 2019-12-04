package com.cognizant.truyum.servlet;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.cognizant.truyum.dao.CartDao;
import com.cognizant.truyum.dao.CartDaoCollectionImpl;
import com.cognizant.truyum.dao.CartEmptyException;
import com.cognizant.truyum.model.Cart;

@WebServlet("/RemoveCart")
public class RemoveCartServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		long menuItemId = Long.parseLong(request.getParameter("menuItemId"));
		CartDao cartDao = new CartDaoCollectionImpl();
		long userId = 1;
		cartDao.removeCartItem(userId, menuItemId);
		request.setAttribute("removeCartItemStatus", true);
		Cart cart = null;
		try {
			cart = cartDao.getAllCartItems(userId);
		} catch (CartEmptyException e) {
			RequestDispatcher requestDispatcher = request.getRequestDispatcher("cart-empty.jsp");
			requestDispatcher.forward(request, response);
		}
		request.setAttribute("cart", cart);
		RequestDispatcher requestDispatcher = request.getRequestDispatcher("cart.jsp");
		try {
			requestDispatcher.forward(request, response);
		} catch (IllegalStateException e) {
		}
	}
}