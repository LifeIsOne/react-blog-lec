package shop.mtcoding.blog._core.config;

import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import shop.mtcoding.blog._core.filter.CorsFilter;

@Configuration
public class FilterConfig {

    @Bean(name="CustomerCors")
    public FilterRegistrationBean<CorsFilter> corsFilter(){
        System.out.println("CORS 필터 등록");
        FilterRegistrationBean<CorsFilter> bean = new FilterRegistrationBean<>(new CorsFilter());
        bean.addUrlPatterns("/*");
        bean.setOrder(0); // 낮은 번호부터 실행됨.
        return bean;
    }
}